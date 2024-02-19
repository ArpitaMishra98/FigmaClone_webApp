'use client'
import Head from 'next/head'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/router';



const Header = () => {
    const router = useRouter();
    const [userSession, setUserSession] = React.useState<string | null>(null);
    const checkSession = () => {
        if (typeof window !== 'undefined') {
            const session = sessionStorage.getItem('loginstatus');
            setUserSession(session);
        }
    };

    React.useEffect(() => {
        router.events.on('routeChangeComplete', checkSession);
        checkSession();
        return () => {
            router.events.off('routeChangeComplete', checkSession);
        };
    }, [router.events]);

    const Logout = () => {
        if (userSession) {
            sessionStorage.removeItem("loginstatus");
            setUserSession(null);
            alert("Logout Successfully");
            router.push("/").then(() => checkSession());
        }
    };
    console.log(userSession);

    return (
        <>
            <Head>
                <title>Figma App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static"  className='appbar'>
                    <Toolbar variant="dense" className='navbar' >
                        <Link href={"/"} className='headitems'>FIGMA</Link>
                        {
                            userSession && userSession ? (
                                <>

                                    <Link href={"/"} className='items'>Projects</Link>
                                    <Link href={"/design"} className='items'>Design</Link>
                                    <a onClick={() => Logout()} className='items' >Logout</a>
                                </>
                            ) : (
                                <>
                                    <Link href={"/login"} className='items'>Login</Link>
                                </>
                            )
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header