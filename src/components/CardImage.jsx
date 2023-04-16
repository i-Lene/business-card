import ProfilePic from '../images/me.jpg';

function CardImage() {
    return (
        <div>
            <img
                src={ProfilePic}
                alt="profile-picture"
                className='profile-pic'
            />
        </div>
    )
}

export { CardImage };