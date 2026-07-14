<script lang="ts">
	interface Props {
		status: string;
	}

	let { status }: Props = $props();

	const styles: Record<string, string> = {
		'Now Enrolling': 'bg-aqua-100 text-aqua-600 border-aqua-400/40',
		Upcoming: 'bg-electric-50 text-electric-600 border-electric-400/40',
		'Completed, next batch TBC': 'bg-paper-deep text-slate-600 border-slate-300',
		'Available on Request': 'bg-gold-100 text-gold-600 border-gold-500/40',
		'Coming soon': 'bg-paper-deep text-slate-600 border-slate-300',
		Active: 'bg-aqua-100 text-aqua-600 border-aqua-400/40',
		Past: 'bg-paper-deep text-slate-600 border-slate-300'
	};
</script>

<span
	class="inline-block rounded-full border px-3 py-1 font-display text-xs font-semibold tracking-wide uppercase {styles[status] ?? 'bg-paper-deep text-slate-600 border-slate-300'}"
>
	{status}
</span>
