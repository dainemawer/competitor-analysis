import { CogIcon } from '@heroicons/react/solid'

const SettingsButton = ({ handleClick }) => {
    return (
        <button aria-label="Open Settings Dialog" onClick={handleClick} className="bg-slate-100 hover:bg-slate-300 focus:bg-slate-300 p-2 flex justify-center items-center rounded-full absolute right-4 top-14" type="button">
            <CogIcon className="w-5 h-5" />
        </button>
    )
}

export default SettingsButton;