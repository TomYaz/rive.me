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

function Console() {

    useEffect(() => {
        document.title = 'rive | Console'
    })

    const navigate = useNavigate();

    return (
        <div className='Console'>
            <ConsoleTopBar />
            <ConsoleLeftMenu />

            <div className='Console-main-container'>
                <h1 className='Console-title'>Console</h1>
                <div className='Console-container-one'>
                    <h3 className='Console-container-header'>Latest projects</h3>
                </div>
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

function ConsoleLeftMenu() {

    /* Triggers for setting active view of console */
    const [consoleActive, setConsoleActive] = useState(true);
    const [newSearchActive, setNewSearchActive] = useState(false);
    const [newProjectActive, setNewProjectActive] = useState(false);
    const [projectseActive, setProjectsActive] = useState(false);
    const [savedReActive, setSavedReActive] = useState(false);
    const [settingsActive, setSettingsActive] = useState(false);

    const triggerActive = (active) => {

        setConsoleActive(false);
        setNewSearchActive(false);
        setNewProjectActive(false);
        setProjectsActive(false);
        setSavedReActive(false);
        setSettingsActive(false);

        if (active == 'console') { setConsoleActive(true) }
        if (active == 'newSearch') { setNewSearchActive(true) }
        if (active == 'newProject') { setNewProjectActive(true) }
        if (active == 'projects') { setProjectsActive(true) }
        if (active == 'saveRe') { setSavedReActive(true) }
        if (active == 'settings') { setSettingsActive(true) }
    }

    return (
        <div className='LeftMenu'>
            <ul>
                <li className={consoleActive ? 'active' : ''} onClick={() => triggerActive('console')}>
                    <RxDashboard className='li-icon' />
                    Console
                </li>

                <div className='LeftMenu-separator' />

                <li className={newSearchActive ? 'active' : ''} onClick={() => triggerActive('newSearch')}>
                    <LuScanSearch className='li-icon' />
                    New search
                </li>

                <li className={newProjectActive ? 'active' : ''} onClick={() => triggerActive('newProject')}>
                    <FaFolderPlus className='li-icon' />
                    New project
                </li>

                <div className='LeftMenu-separator' />

                <li className={projectseActive ? 'active' : ''} onClick={() => triggerActive('projects')}>
                    <FaRegFolderOpen className='li-icon' />
                    Projects
                    {projectseActive ? <FaAngleUp className='li-icon-down' /> : <FaAngleDown className='li-icon-down' />}
                </li>
                {
                    projectseActive &&
                    <ul className='sub-menu'>
                        <li>Legal ressources</li>
                        <li>M&A pharma</li>
                        <li>Secret project</li>
                    </ul>
                }

                <li className={savedReActive ? 'active' : ''} onClick={() => triggerActive('saveRe')}>
                    <BsSave className='li-icon' />
                    Saved ressources
                </li>

                <li className={settingsActive ? 'active' : ''} onClick={() => triggerActive('settings')}>
                    <SlSettings className='li-icon' />
                    Settings
                </li>


            </ul>
        </div>
    )
}

export default Console;
