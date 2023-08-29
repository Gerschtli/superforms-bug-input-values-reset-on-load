<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	const { form } = superForm(data.form);

	let field2: HTMLInputElement | undefined = undefined;

	$: console.log({
		'value of field with bind:value': $form.field1,
		'value of field with bind:this': field2?.value
	});
</script>

<ol>
	<li>Load this page with "Fast 3G" or similar</li>
	<li>Enter some values into both inputs immediately</li>
	<li>
		Wait for JS to be loaded completely and notice how the first input value is cleared (see also
		<code>console.log</code> statement)
	</li>
</ol>

<form method="POST">
	<div>
		<label for="name">Field with <code>bind:value</code></label>
		<input type="text" name="field1" bind:value={$form.field1} />
		<div>Current value when js loaded completely: {$form.field1}</div>
	</div>

	<div>
		<label for="name">Field with <code>bind:this</code></label>
		<input type="text" name="field2" bind:this={field2} />
		<div>Current value when js loaded completely: {field2?.value}</div>
	</div>

	<div><button>Submit</button></div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	input {
		display: block;
	}
</style>
