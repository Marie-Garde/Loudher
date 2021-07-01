import React, { useState } from "react";
import logo from "../assets/Logos/logo.png"

import {
    Background,
    Logo,
    Menu,
    P,
    ItemMenu,
    Marker
} from "/Users/mariegarde/Desktop/Projet - perso/Loudher/frontend/src/styled-components/Header.jsx";

export default function Header () {
    const [selectedTab, setSelectedTab] = useState("Accueil")
  
    return (
        <>
        <Background>
            <Logo src={logo}></Logo>
            <Menu>
                <ItemMenu menuId="3" onClick={() => setSelectedTab('Accueil')}>
                    <P>Accueil</P>
                    <Marker active={selectedTab === 'Accueil'}></Marker>
                </ItemMenu>
                <ItemMenu menuId="2" onClick={() => setSelectedTab('Projet')}>
                    <P>Projet</P>
                    <Marker active={selectedTab === 'Projet'}></Marker>
                </ItemMenu>
                <ItemMenu menuId="3" onClick={() => setSelectedTab('Actions')}>
                    <P>Actions</P>
                    <Marker active={selectedTab === 'Actions'}></Marker>
                </ItemMenu>
                <ItemMenu menuId="4" onClick={() => setSelectedTab('Annuaire')}>
                    <P>Annuaire</P>
                    <Marker active={selectedTab === 'Annuaire'}></Marker>
                </ItemMenu>
                <ItemMenu menuId="5" onClick={() => setSelectedTab('Adhérer')}>
                    <P>Adhérer</P>
                    <Marker active={selectedTab === 'Adhérer'}></Marker>
                </ItemMenu>
                <ItemMenu menuId="6"onClick={() => setSelectedTab('Contacts')}>
                    <P>Contacts</P>
                    <Marker active={selectedTab === 'Contacts'}></Marker>
                </ItemMenu>
            </Menu>
        </Background>
        </>
        
    )
}