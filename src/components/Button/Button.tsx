// importing components
import Link from "next/link";

// importing types
import { ButtonPropType } from "@/types/Button";

// button component
export default function Button(_props: ButtonPropType) {
  // destructuring props
  const { label, color, disabled, href = null, clickEvent = null } = _props;

  // function to handle click event
  const handleEvent = () => {
    // if there is no click event
    if (clickEvent === null) return;

    clickEvent(); // invoke event
  };

  return (
    <>
      {href !== null ? (
        <div className="button">
          <Link href={href}>
            <button onClick={handleEvent} disabled={disabled}>
              {label}
            </button>
          </Link>
        </div>
      ) : (
        <div className="button">
          <button onClick={handleEvent} disabled={disabled}>
            {label}
          </button>
        </div>
      )}
    </>
  );
}
