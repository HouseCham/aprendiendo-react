import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const addAt = (userName) => `@${userName}`
    const users = [
        { name: 'Miguel de Oliveira', userName: 'midudev', isFollowing: true },
        { name: 'Ramses Ramirez', userName: 'chamito', isFollowing: false },
        { name: 'Ortencio Olivares', userName: 'orteOlivo', isFollowing: true },
    ]
    return (
        <section className='App'>
            {
                // forma 1
                users.map((user) => {
                    const { name, userName, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            formatUsername={addAt}
                            name={name}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        />
                    )
                })
            }
            {
                // forma 2
                users.map(({ name, userName, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        formatUsername={addAt}
                        name={name}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    />
                ))
            }
            <TwitterFollowCard
                formatUsername={addAt}
                name={'Miguel de Oliveira'}
                userName={'midudev'}
                initialIsFollowing={true}
            />
            <TwitterFollowCard
                formatUsername={addAt}
                name={'Ramses Ramirez'}
                userName={'chamito'}
                initialIsFollowing={false}
            />
        </section>
    )
}