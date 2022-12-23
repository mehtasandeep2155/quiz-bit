import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { MUIButton, MUISlider } from '~/integrations/react/mui';

export default component$(() => {
  const show = useSignal(false);
  const count = useSignal(0);
  const variant = useSignal<'contained' | 'outlined' | 'text'>('contained');

  return (
    <>
      <h1>Qwik/React mother of all demos</h1>
      <select
        value={variant?.value}
        onChange$={(ev) => {
          variant.value = (ev?.target as any)?.value;
        }}
      >
        <option>text</option>
        <option>outlined</option>
        <option selected>contained</option>
      </select>
{/* 
      <MUISlider
        value={count?.value}
        onChange$={(_, value) => {
          count.value = value as number;
        }}
      /> */}

    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik React',
};
