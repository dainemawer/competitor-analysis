import Github from '@components/Icons/Github'

const GithubButton = () => {
    return (
        <a className="bg-slate-100 hover:bg-slate-300 focus:bg-slate-300 p-2 rounded-full absolute right-4 top-4" href="https://github.com">
            <Github />
            <span className="sr-only">View source on Github</span>
        </a>
    )
}

export default GithubButton;