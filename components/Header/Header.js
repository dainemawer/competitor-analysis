import { DocumentIcon, PaperClipIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className="flex flex-col justify-center items-center col-span-3 bg-slate-100 p-8 relative">
                    <ul>
                        <li className="mb-2 font-semibold">
                            Useful Links
                        </li>
                        <li className="mb-2">
                            <a className="flex items-center" href="http://google.com" target="_blank" rel="nopenner noreferrer">
                                <DocumentIcon className="h-4 w-4 mr-1" />
                                Performance Audit
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="flex items-center" href="http://google.com" target="_blank" rel="nopenner noreferrer">
                                <DocumentIcon className="h-4 w-4 mr-1" />
                                Performance Budgets
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="flex items-center" href="http://google.com" target="_blank" rel="nopenner noreferrer">
                                <DocumentIcon className="h-4 w-4 mr-1" />
                                Competitor Analysis
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="flex items-center" href="http://google.com" target="_blank" rel="nopenner noreferrer">
                                <DocumentIcon className="h-4 w-4 mr-1" />
                                Monitoring Report
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="flex items-center" href="http://google.com" target="_blank" rel="nopenner noreferrer">
                                <DocumentIcon className="h-4 w-4 mr-1" />
                                Third-party Audit
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center" href="http://google.com" target="_blank" rel="nopenner noreferrer">
                                <PaperClipIcon className="h-4 w-4 mr-1" />
                                Frontend Handbook
                            </a>
                        </li>
                    </ul>
                    <p className="flex absolute text-sm bottom-4">Built with ❤️ for&nbsp;<a href="https://10up.com" target="_blank" rel="nopenner noreferrer" className="text-well-read font-semibold">10up</a></p>
                </header>
    );
}

export default Header;