import Hoc from '../utils/container';

const Nav = (await import('app2/nav')).default;

const page1 = () => {
    return(
        <>
            <Hoc>
                <Nav></Nav>
            </Hoc>
        </>
    )
    };

export default page1;