// importing components
import Link from "next/link";

// importing types
import { ButtonPropType } from "@/types/Button";

// button component
export default function Button(_props: ButtonPropType) {
  // destructuring props
  const { label, color, disabled, href } = _props;

  return (
    <div className="button">
      <Link href={href}>
        <button disabled={disabled}>{label}</button>
      </Link>
    </div>
  );
}
