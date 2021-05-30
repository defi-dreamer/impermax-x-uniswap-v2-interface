
import clsx from 'clsx';

import ImpermaxButtonBase, { Props as ImpermaxButtonBaseProps } from 'components/UI/ImpermaxButtonBase';
import { ReactComponent as SpinIcon } from 'assets/images/icons/spin.svg';

interface CustomProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  pending?: boolean;
}

const JadeContainedButton = ({
  className,
  children,
  startIcon,
  endIcon,
  disabled = false,
  pending = false,
  ...rest
}: Props): JSX.Element => {
  const disabledOrPending = disabled || pending;

  return (
    <ImpermaxButtonBase
      type='button'
      className={clsx(
        'focus:outline-none',
        'focus:ring',
        'focus:border-primary-300',
        'focus:ring-primary-200',
        'focus:ring-opacity-50',

        'border',
        'border-transparent',
        'font-medium',
        'shadow-sm',

        disabledOrPending ? clsx(
          'bg-black',
          'bg-opacity-10',
          'text-black',
          'text-opacity-25',
          'dark:text-white',
          'dark:text-opacity-30'
        ) : clsx(
          'text-white',
          'bg-impermaxJade-600',
          'hover:bg-impermaxJade-700'
        ),

        'rounded-md',
        'px-4',
        'py-2',
        'text-sm',
        'space-x-1',
        'justify-center',
        className
      )}
      disabled={disabledOrPending}
      {...rest}>
      {pending && (
        <SpinIcon
          className={clsx(
            'animate-spin',
            'w-5',
            'h-5',
            'mr-3'
          )} />
      )}
      {startIcon}
      <span>
        {children}
      </span>
      {endIcon}
    </ImpermaxButtonBase>
  );
};

export type Props = CustomProps & ImpermaxButtonBaseProps;

export default JadeContainedButton;