import { useState } from "react";

export function Accordion({ children }) {
  return <div className="space-y-2">{children}</div>;
}

export function AccordionItem({ trigger, value, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-md p-3">
      <div
        className="cursor-pointer font-medium"
        onClick={() => setOpen(!open)}
      >
        {trigger}
      </div>
      {open && <div className="mt-2 text-sm text-gray-700">{children}</div>}
    </div>
  );
}
