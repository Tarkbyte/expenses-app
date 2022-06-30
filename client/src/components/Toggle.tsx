import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import { CurrencyEuroIcon, CurrencyDollarIcon } from "@heroicons/react/outline";

interface Props {
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}

const Toggle = (props: Props) => {
  return (
    <Switch.Group>
      <div className="flex items-center mr-10 bg-white p-1 rounded-xl">
        <Switch.Label className="mr-1 cursor-pointer">
          <CurrencyDollarIcon className="w-6 h-6 text-emerald-400" />
        </Switch.Label>
        <Switch
          checked={props.enabled}
          onChange={props.setEnabled}
          className="bg-gray-200 relative inline-flex h-6 w-11 items-center rounded-full"
        >
          <span
            className={`${
              props.enabled
                ? "translate-x-6 bg-lime-400"
                : "translate-x-1 bg-emerald-400"
            } inline-block h-4 w-4 transform rounded-full transition-all`}
          />
        </Switch>
        <Switch.Label className="ml-1 cursor-pointer">
          <CurrencyEuroIcon className="w-6 h-6 text-lime-400" />
        </Switch.Label>
      </div>
    </Switch.Group>
  );
};

export default Toggle;
