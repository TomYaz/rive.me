import { useEffect, useState } from 'react'
import './Console.css'

import logo from './assets/images/rive logo 2.png'
import logo2 from './assets/images/rive logo 1.png'

import { useNavigate, useLocation } from 'react-router'
import { FaFolderPlus } from "react-icons/fa"
import { BsSave } from "react-icons/bs"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import { LuScanSearch } from "react-icons/lu"
import { SlSettings } from "react-icons/sl"
import { Dashboard, NewProject, NewSearch, Settings } from './ConsoleTabs/ConsoleTabs'
import { getUserDisplayName, isUserLoggedIn } from './Firebase/Firebase'

function Console() {

    /* Triggers for setting active view of console */
    const [consoleActive, setConsoleActive] = useState(false);
    const [newSearchActive, setNewSearchActive] = useState(false);
    const [newProjectActive, setNewProjectActive] = useState(false);
    const [projectseActive, setProjectsActive] = useState(false);
    const [recentSearches, setRecentSearches] = useState(false);
    const [savedReActive, setSavedReActive] = useState(false);
    const [settingsActive, setSettingsActive] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        async function checkAuth() {
            const loggedIn = await isUserLoggedIn();
            if (!loggedIn) navigate("/login");
        }
        checkAuth();


        if (location.pathname == '/console') { setConsoleActive(true) }
        else if (location.pathname == '/console/new-search') { setNewSearchActive(true) }
        else if (location.pathname == '/console/new-project') { setNewProjectActive(true) }
        else if (location.pathname == '/console/saved-resources') { setSavedReActive(true) }
        else if (location.pathname == '/console/settings') { setSettingsActive(true) }
        else {
            navigate('/console')
            setConsoleActive(true)
        }

    }, [location])


    return (
        <div className='Console'>
            <ConsoleTopBar />
            <ConsoleLeftMenu
                consoleActive={consoleActive} setConsoleActive={setConsoleActive}
                newSearchActive={newSearchActive} setNewSearchActive={setNewSearchActive}
                newProjectActive={newProjectActive} setNewProjectActive={setNewProjectActive}
                projectseActive={projectseActive} setProjectsActive={setProjectsActive}
                recentSearches={recentSearches} setRecentSearches={setRecentSearches}
                savedReActive={savedReActive} setSavedReActive={setSavedReActive}
                settingsActive={settingsActive} setSettingsActive={setSettingsActive}

            />

            <div className='Console-main-container'>
                {consoleActive && <Dashboard />}
                {newSearchActive && <NewSearch />}
                {newProjectActive && <NewProject />}
                {settingsActive && <Settings />}
            </div>
        </div>
    )
}

function ConsoleTopBar() {

    const navigate = useNavigate();

    /* Top Bar variables */
    const [displayName, setDisplayName] = useState('')

    useEffect(() => {
        let alive = true;
        (async () => {
            const name = await getUserDisplayName();
            if (alive) setDisplayName(name);
        })();
        return () => { alive = false; };
    }, []);

    return (
        <div className='TopBar'>
            <img src={localStorage.getItem('theme') == 'dark' ? logo : logo2} className='TopBar-logo' onClick={() => navigate('/')} />
            <div className='TopBar-right-container'>
                <span className='TopBar-user'>
                    <span className='TopBar-user-underline'> {displayName} </span>
                </span>
            </div>
        </div>
    )
}

function ConsoleLeftMenu(props) {

    const navigate = useNavigate();

    const triggerActive = (active) => {

        if (active == 'projects') {
            props.setProjectsActive(true)
        }
        else {
            props.setConsoleActive(false);
            props.setNewSearchActive(false);
            props.setNewProjectActive(false);
            props.setProjectsActive(false);
            props.setRecentSearches(false);
            props.setSavedReActive(false);
            props.setSettingsActive(false);

            if (active == 'console') {
                props.setConsoleActive(true)
                navigate('/console')

            }
            if (active == 'newSearch') {
                props.setNewSearchActive(true)
                navigate('/console/new-search')
            }
            if (active == 'newProject') {
                props.setNewProjectActive(true)
                navigate('/console/new-project')
            }

            if (active == 'saveRe') {
                props.setSavedReActive(true)
                navigate('/console/saved-resources')
            }
            if (active == 'settings') {
                props.setSettingsActive(true)
                navigate('/console/settings')
            }
        }
    }

    return (
        <div className='LeftMenu'>
            <ul>
                { /* UNCOMMENT IF WE KEEP THE CONSOLE TAB
                
                <li className={props.consoleActive ? 'active' : ''} onClick={() => triggerActive('console')}>
                    <RxDashboard className='li-icon' />
                    Console
                </li>

                <div className='LeftMenu-separator' /> 

                */}

                <li className={props.newSearchActive ? 'active' : ''} onClick={() => triggerActive('newSearch')}>
                    <LuScanSearch className='li-icon' />
                    New search
                </li>

                <li className={props.newProjectActive ? 'active' : ''} onClick={() => triggerActive('newProject')}>
                    <FaFolderPlus className='li-icon' />
                    New project
                </li>

                <div className='LeftMenu-separator' />

                <li className={props.savedReActive ? 'active' : ''} onClick={() => triggerActive('saveRe')}>
                    <BsSave className='li-icon' />
                    Saved resources
                </li>

                <div className='LeftMenu-separator' />

                <li className='' onClick={() => props.setProjectsActive(!props.projectseActive)}>
                    Projects
                    {props.projectseActive ? <FaAngleUp className='li-icon-down' /> : <FaAngleDown className='li-icon-down' />}
                </li>
                {
                    props.projectseActive &&
                    <ul className='sub-menu'>
                        <li>Legal ressources</li>
                        <li>M&A pharma</li>
                        <li>Secret project</li>
                    </ul>
                }

                <li className='' onClick={() => props.setRecentSearches(!props.recentSearches)}>
                    Recent searches
                    {props.recentSearches ? <FaAngleUp className='li-icon-down' /> : <FaAngleDown className='li-icon-down' />}
                </li>
                {
                    props.recentSearches &&
                    <ul className='sub-menu'>
                        <li>Search 1</li>
                        <li>Search 2</li>
                        <li>Search 3</li>
                    </ul>
                }


                <li className={props.settingsActive ? 'active' : ''} onClick={() => triggerActive('settings')}>
                    <SlSettings className='li-icon' />
                    Settings
                </li>


            </ul>
        </div>
    )
}

export default Console;


