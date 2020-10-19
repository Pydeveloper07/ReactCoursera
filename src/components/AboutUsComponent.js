import React from 'react';
import {Media, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderCorporateLeadership({leader}){
    return(
        <div className='col-12 item'>
            <Media>
                <Media left center>
                    <Media object src={leader.image} alt={leader.name} />
                </Media>
                <Media body>
                    <Media heading>{leader.name}</Media>
                    <p>{leader.designation}</p>
                    {leader.description}
                </Media>
            </Media>
        </div>
    );
}

const AboutUs = (props) => {
    const leader_list = props.leaders.map((leader) => {
        return(
            <RenderCorporateLeadership leader={leader} />
        );
    });
    return(
        <div className='container'>
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <h2>About Us</h2>
            <hr />
            <div className='about-us'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h2>Our History</h2>
                        <p>
                            Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong,
                            With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys the patronage from the
                            A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you will never know 
                            what will arrive on your plat the next time you visit us.
                        </p>
                        <p>
                            The restaurant traces its humble beginnings to <i>The Frying Pan</i>, a successful chain started by our CEO, Mr. Peter Pan,
                            that featured for the first time the world's best cuisines in a pan.
                        </p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <table>
                            <th colSpan='2'>Facts At a Glance</th>
                            <tr>
                                <td className='font-weight-bold text-left'>Started</td>
                                <td className='text-right'>3 Feb. 2013</td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold text-left'>Major Stake Holder</td>
                                <td className='text-right'>HK Fine Foods Inc.</td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold text-left'>Last Year's Turnover</td>
                                <td className='text-right'>$1,250,375</td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold text-left'>Employees</td>
                                <td className='text-right'>40</td>
                            </tr>
                        </table>
                    </div>
                    <div className='col-12'>
                        <div className='quote'>
                            <blockquote>You better cut the pizza in four pieces because I'm not hungry enough to eat six.</blockquote>
                            <p className='subquote'>- Yogi Berra, <i>The Wit and Wisdom of Yogi Berra, P.Pepe, Diversion Books, 2014</i></p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='mt-3'>Corporate Leadership</h2>
            <div className='row leaders'>
                {leader_list}
            </div>
        </div>
    );
}

export default AboutUs;