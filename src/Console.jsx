import { useEffect, useState } from 'react'
import './Console.css'

import logo from './assets/images/rive logo 2.png'

import { useNavigate } from 'react-router'
import { RxDashboard } from "react-icons/rx"
import { FaRegFolderOpen, FaFolderPlus, FaRegUserCircle } from "react-icons/fa"
import { BsSave } from "react-icons/bs"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import { LuScanSearch } from "react-icons/lu"
import { SlSettings } from "react-icons/sl"
import { Dashboard, NewSearch } from './ConsoleTabs/ConsoleTabs'

function Console() {

    /* Triggers for setting active view of console */
    const [consoleActive, setConsoleActive] = useState(true);
    const [newSearchActive, setNewSearchActive] = useState(false);
    const [newProjectActive, setNewProjectActive] = useState(false);
    const [projectseActive, setProjectsActive] = useState(false);
    const [savedReActive, setSavedReActive] = useState(false);
    const [settingsActive, setSettingsActive] = useState(false);


    useEffect(() => {
    })


    return (
        <div className='Console'>
            <ConsoleTopBar />
            <ConsoleLeftMenu
                consoleActive={consoleActive} setConsoleActive={setConsoleActive}
                newSearchActive={newSearchActive} setNewSearchActive={setNewSearchActive}
                newProjectActive={newProjectActive} setNewProjectActive={setNewProjectActive}
                projectseActive={projectseActive} setProjectsActive={setProjectsActive}
                savedReActive={savedReActive} setSavedReActive={setSavedReActive}
                settingsActive={settingsActive} setSettingsActive={setSettingsActive}

            />

            <div className='Console-main-container'>
                {consoleActive && <Dashboard />}
                {newSearchActive && <NewSearch />}
            </div>
        </div>
    )
}

function ConsoleTopBar() {

    const navigate = useNavigate();

    return (
        <div className='TopBar'>
            <img src={logo} className='TopBar-logo' onClick={() => navigate('/')} />
            <div className='TopBar-right-container'>
                <span className='TopBar-user'>
                    <span className='TopBar-user-underline'> TomYaz </span>
                </span>
            </div>
        </div>
    )
}

function ConsoleLeftMenu(props) {


    const triggerActive = (active) => {

        props.setConsoleActive(false);
        props.setNewSearchActive(false);
        props.setNewProjectActive(false);
        props.setProjectsActive(false);
        props.setSavedReActive(false);
        props.setSettingsActive(false);

        if (active == 'console') { props.setConsoleActive(true) }
        if (active == 'newSearch') { props.setNewSearchActive(true) }
        if (active == 'newProject') { props.setNewProjectActive(true) }
        if (active == 'projects') { props.setProjectsActive(true) }
        if (active == 'saveRe') { props.setSavedReActive(true) }
        if (active == 'settings') { props.setSettingsActive(true) }
    }

    return (
        <div className='LeftMenu'>
            <ul>
                <li className={props.consoleActive ? 'active' : ''} onClick={() => triggerActive('console')}>
                    <RxDashboard className='li-icon' />
                    Console
                </li>

                <div className='LeftMenu-separator' />

                <li className={props.newSearchActive ? 'active' : ''} onClick={() => triggerActive('newSearch')}>
                    <LuScanSearch className='li-icon' />
                    New search
                </li>

                <li className={props.newProjectActive ? 'active' : ''} onClick={() => triggerActive('newProject')}>
                    <FaFolderPlus className='li-icon' />
                    New project
                </li>

                <div className='LeftMenu-separator' />

                <li className={props.projectseActive ? 'active' : ''} onClick={() => triggerActive('projects')}>
                    <FaRegFolderOpen className='li-icon' />
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

                <li className={props.savedReActive ? 'active' : ''} onClick={() => triggerActive('saveRe')}>
                    <BsSave className='li-icon' />
                    Saved ressources
                </li>

                <li className={props.settingsActive ? 'active' : ''} onClick={() => triggerActive('settings')}>
                    <SlSettings className='li-icon' />
                    Settings
                </li>


            </ul>
        </div>
    )
}

export default Console;


