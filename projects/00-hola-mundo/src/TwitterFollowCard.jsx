import { useState } from 'react'

export function TwitterFollowCard({formatUsername, userName, name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const followText = isFollowing ? 'Siguiendo' : 'Seguir'
    const btnClassName = isFollowing ? 'tw-followCard-btn is-following' : 'tw-followCard-btn'
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/github/${userName}`}
                    alt="Avatar de mdo" />
                <div className='tw-followCard-body'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-span'>{formatUsername(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={btnClassName} onClick={handleClick}>
                    {followText}
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}