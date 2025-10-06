import { cn } from '@/app/lib/utils';

export interface FunctionalTemplateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  leftHeader?: React.ReactNode;
  leftMain: React.ReactNode;
  leftFooter?: React.ReactNode;
  rightHeader?: React.ReactNode;
  rightMain: React.ReactNode;
  rightFooter?: React.ReactNode;
  footer?: React.ReactNode;

  leftMainClassName?: string;
}

const FunctionalTemplate = (props: FunctionalTemplateProps) => {
  return (
    // page container
    <div className=" mx-auto w-full max-w-7xl p-6">
      {/* layout */}
      <div className="flex h-full w-full flex-col">
        {/* main */}
        <div className="flex w-full flex-1 flex-col sm:flex-row sm:gap-6">
          <div className="flex h-auto w-full flex-col">
            {/* left header */}
            {props.leftHeader !== null ? (
              props.leftHeader
            ) : props.rightHeader !== null ? (
              <div className="h-16 lg:h-10" />
            ) : null}

            {/* left content */}
            <div
              className={cn(
                'relative mb-4 h-full w-full flex-1 ',
                props.leftMainClassName !== null && props.leftMainClassName
              )}
            >
              {props.leftMain}
            </div>

            {/* left footer */}
            {props.leftFooter !== null ? props.leftFooter : null}
          </div>

          {/* right */}
          <div className="flex h-auto w-full flex-col">
            {/* right header */}
            {props.rightHeader !== null ? (
              props.rightHeader
            ) : props.leftHeader !== null ? (
              <div className="h-0 sm:h-16 lg:h-10" />
            ) : null}

            {/* right content */}
            {props.rightMain}

            {/* right footer */}
            {props.rightFooter !== null ? props.rightFooter : null}
          </div>
        </div>

        {/* footer */}
        <div className="flex items-center justify-center">{props.footer}</div>
      </div>
    </div>
  );
};

export default FunctionalTemplate;
