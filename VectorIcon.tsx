import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 418' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 46.8936L48.1756 85.7021C96.3513 123.702 191.95 201.319 288.301 201.319C383.9 201.319 480.251 123.702 575.849 92.9787C672.201 62.2553 768.552 77.617 864.151 101.064C960.502 123.702 1056.1 155.234 1152.45 139.872C1248.05 123.702 1344.4 62.2553 1392.58 31.5319L1440 0V418H1392.58C1344.4 418 1248.05 418 1152.45 418C1056.1 418 960.502 418 864.151 418C768.552 418 672.201 418 575.849 418C480.251 418 383.9 418 288.301 418C191.95 418 96.3513 418 48.1756 418H0L0 46.8936Z'
      fill='#111111'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
