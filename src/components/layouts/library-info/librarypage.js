import React from 'react';

import { Text, Heading } from '../../utils/heading';
// import Library from './libfacility';
import Libgallery from './libgallery';

import Loadable from 'react-loadable';

import lib1 from '../../../images/layouts/library/lib1.jpg'


const LoadableLibraryComponent = Loadable({
    loader: () => import('./libfacility'),
    loading: 'Loading...',
  });


const Librarypage = () => {

    let libhead= `College library is an integral part of the teaching and learning environment of the College. The library is well-equipped with a wide range of books, academic journals, periodicals and electronic and digital material in order to meet the educational needs of students as well as the professional needs of the faculty staff.  The library has a large seating capacity and it is ideal for studying in peace and quiet.`
    let librarycontent = `The library of C B Bhandari Jain College was established in the year 2000. The library being upgraded with the latest library software, i.e. pupilpod. The library has all the facilities with required information in the form of books, journals and the internet.
    The college library is a gateway to a world of information. The staff and students have unlimited access to a wealth of information resources like books, magazines, journals, encyclopedias and the internet. The library has seating arrangements and calm ambience for learning.
    
    N-List Member Login
    National Library and Information Services infrastructure for Scholarly Content (N-LIST) program`



    return (
        <div className="container py-5">

<Heading className="my-3 text-justify pb-5" fontsize="16px" title={libhead}/>
       <div className="row">
           <div className="col-sm-3">

<img src={lib1} alt="limg" className="d-block m-auto "/>

           </div>
           <div className="col-sm-9 p-4">

               <Text text={librarycontent}/>
           </div>

       </div>

       <LoadableLibraryComponent/>
       <Libgallery/>
            
        </div>
    );
};

export default Librarypage;