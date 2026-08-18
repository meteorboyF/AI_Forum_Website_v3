<script lang="ts">
	interface Photo {
		src: string;
		alt: string;
	}

	interface Props {
		photos: Photo[];
		index: number;
		title?: string;
		onclose: () => void;
	}

	let { photos, index = $bindable(), title, onclose }: Props = $props();

	import { lockScroll } from '$lib/scrollLock';

	const photo = $derived(photos[index]);
	const prevIndex = $derived((index - 1 + photos.length) % photos.length);
	const nextIndex = $derived((index + 1) % photos.length);

	let closeButton: HTMLButtonElement | undefined = $state();
	let pointerStartX: number | null = null;

	// Lock page scroll while open, focus the dialog, and hand focus
	// back to whatever opened it when it closes.
	$effect(() => {
		const opener = document.activeElement as HTMLElement | null;
		const unlock = lockScroll();
		closeButton?.focus();
		return () => {
			unlock();
			opener?.focus?.();
		};
	});

	function onKeydown(keyEvent: KeyboardEvent) {
		const target = keyEvent.target as HTMLElement | null;
		if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
		// The page-level Escape handler ignores the key while the
		// lightbox is open (it checks lightboxIndex), so only the
		// top-most layer closes per key press.
		if (keyEvent.key === 'Escape') {
			onclose();
		} else if (keyEvent.key === 'ArrowLeft' && photos.length > 1) {
			index = prevIndex;
		} else if (keyEvent.key === 'ArrowRight' && photos.length > 1) {
			index = nextIndex;
		}
	}

	function onPointerDown(pointerEvent: PointerEvent) {
		pointerStartX = pointerEvent.clientX;
	}

	function onPointerUp(pointerEvent: PointerEvent) {
		if (pointerStartX === null || photos.length < 2) return;
		const delta = pointerEvent.clientX - pointerStartX;
		pointerStartX = null;
		if (Math.abs(delta) < 48) return;
		index = delta > 0 ? prevIndex : nextIndex;
	}
</script>

<svelte:window onkeydown={onKeydown} />

<div
	class="fixed inset-0 z-[120] flex flex-col bg-ink-950/95 backdrop-blur-sm"
	role="dialog"
	aria-modal="true"
	aria-label={title ? `${title} photo viewer` : 'Photo viewer'}
>
	<div class="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
		<p class="min-w-0 truncate text-sm font-semibold text-white/85">
			{#if title}<span class="hidden sm:inline">{title} · </span>{/if}
			<span class="tabular-nums">{index + 1} / {photos.length}</span>
		</p>
		<div class="flex shrink-0 items-center gap-2">
			<a
				href={photo.src}
				target="_blank"
				rel="noopener noreferrer"
				class="hidden rounded-full border border-white/20 px-4 py-2 text-xs font-bold text-white/85 transition-colors hover:bg-white hover:text-ink-900 sm:inline-flex"
			>
				Open full size ↗
			</a>
			<button
				bind:this={closeButton}
				type="button"
				class="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-xl text-white transition-colors hover:bg-white hover:text-ink-900"
				onclick={onclose}
				aria-label="Close photo viewer"
			>
				×
			</button>
		</div>
	</div>

	<div
		class="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-6 sm:px-16"
		role="presentation"
		onclick={(clickEvent) => clickEvent.target === clickEvent.currentTarget && onclose()}
		onpointerdown={onPointerDown}
		onpointerup={onPointerUp}
	>
		{#key photo.src}
			<img
				src={photo.src}
				alt={photo.alt}
				class="lightbox-img max-h-full max-w-full rounded-lg object-contain shadow-2xl select-none"
				draggable="false"
			/>
		{/key}

		{#if photos.length > 1}
			<button
				type="button"
				class="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink-950/60 text-white backdrop-blur transition-colors hover:bg-white hover:text-ink-900 sm:left-4"
				onclick={() => (index = prevIndex)}
				aria-label="Previous photograph"
			>
				←
			</button>
			<button
				type="button"
				class="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink-950/60 text-white backdrop-blur transition-colors hover:bg-white hover:text-ink-900 sm:right-4"
				onclick={() => (index = nextIndex)}
				aria-label="Next photograph"
			>
				→
			</button>
		{/if}
	</div>

	{#if photos.length > 1}
		<!-- Preload neighbours so arrow navigation feels instant -->
		<div class="hidden" aria-hidden="true">
			<img src={photos[prevIndex].src} alt="" />
			<img src={photos[nextIndex].src} alt="" />
		</div>
	{/if}
</div>

<style>
	.lightbox-img {
		animation: lightbox-in 220ms ease-out;
	}

	@keyframes lightbox-in {
		from {
			opacity: 0;
			transform: scale(0.985);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.lightbox-img {
			animation: none;
		}
	}
</style>
