<script lang="ts">
	/**
	 * Generative node-constellation backdrop for the hero.
	 * GPU-cheap: a single 2D canvas, ~70 nodes, capped at device pixel
	 * ratio 2, paused when off-screen or when the tab is hidden, and
	 * fully disabled under prefers-reduced-motion (a static frame is
	 * drawn once instead).
	 */
	import { onMount } from 'svelte';
	import { prefersReducedMotion } from '$lib/motion';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const reduced = prefersReducedMotion();
		let raf = 0;
		let running = false;
		let w = 0;
		let h = 0;
		let dpr = Math.min(2, window.devicePixelRatio || 1);

		interface Node {
			x: number;
			y: number;
			vx: number;
			vy: number;
			r: number;
		}
		let nodes: Node[] = [];
		const pointer = { x: -9999, y: -9999 };

		function resize() {
			const rect = canvas.getBoundingClientRect();
			w = rect.width;
			h = rect.height;
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(h * dpr);
			ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.min(80, Math.round((w * h) / 16000));
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - 0.5) * 0.25,
				vy: (Math.random() - 0.5) * 0.25,
				r: 1 + Math.random() * 1.8
			}));
		}

		const LINK_DIST = 130;

		function frame() {
			ctx!.clearRect(0, 0, w, h);
			for (const n of nodes) {
				if (!reduced) {
					n.x += n.vx;
					n.y += n.vy;
					// gentle drift away from the pointer
					const dx = n.x - pointer.x;
					const dy = n.y - pointer.y;
					const d2 = dx * dx + dy * dy;
					if (d2 < 22500) {
						const d = Math.sqrt(d2) || 1;
						n.x += (dx / d) * 0.6;
						n.y += (dy / d) * 0.6;
					}
					if (n.x < -20) n.x = w + 20;
					if (n.x > w + 20) n.x = -20;
					if (n.y < -20) n.y = h + 20;
					if (n.y > h + 20) n.y = -20;
				}
			}
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const a = nodes[i];
					const b = nodes[j];
					const dx = a.x - b.x;
					const dy = a.y - b.y;
					const d = Math.hypot(dx, dy);
					if (d < LINK_DIST) {
						const alpha = (1 - d / LINK_DIST) * 0.35;
						ctx!.strokeStyle = `rgba(125, 132, 245, ${alpha})`;
						ctx!.lineWidth = 1;
						ctx!.beginPath();
						ctx!.moveTo(a.x, a.y);
						ctx!.lineTo(b.x, b.y);
						ctx!.stroke();
					}
				}
			}
			for (const n of nodes) {
				ctx!.fillStyle = 'rgba(34, 211, 238, 0.75)';
				ctx!.beginPath();
				ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
				ctx!.fill();
			}
		}

		function loop() {
			frame();
			if (running && !reduced) raf = requestAnimationFrame(loop);
		}

		function start() {
			if (running || reduced) return;
			running = true;
			raf = requestAnimationFrame(loop);
		}
		function stop() {
			running = false;
			cancelAnimationFrame(raf);
		}

		resize();
		frame(); // static first paint, also the only paint when reduced

		const io = new IntersectionObserver((entries) => {
			entries[0].isIntersecting ? start() : stop();
		});
		io.observe(canvas);

		const onVisibility = () => (document.hidden ? stop() : start());
		document.addEventListener('visibilitychange', onVisibility);

		const onPointer = (e: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			pointer.x = e.clientX - rect.left;
			pointer.y = e.clientY - rect.top;
		};
		const onLeave = () => {
			pointer.x = -9999;
			pointer.y = -9999;
		};
		canvas.parentElement?.addEventListener('pointermove', onPointer);
		canvas.parentElement?.addEventListener('pointerleave', onLeave);

		const ro = new ResizeObserver(() => {
			resize();
			frame();
		});
		ro.observe(canvas);

		return () => {
			stop();
			io.disconnect();
			ro.disconnect();
			document.removeEventListener('visibilitychange', onVisibility);
			canvas.parentElement?.removeEventListener('pointermove', onPointer);
			canvas.parentElement?.removeEventListener('pointerleave', onLeave);
		};
	});
</script>

<canvas bind:this={canvas} class="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true"
></canvas>
