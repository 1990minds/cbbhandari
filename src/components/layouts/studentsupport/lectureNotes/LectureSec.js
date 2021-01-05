import React from 'react';
import styled from 'styled-components';
import Notedata from './LectureNotedata'
import imgbook from '../../../../images/pdf/Book-Vectors.jpg'
const LectureSec = () => {
    return (
        <LectureNoteWrap className="container my-5">

<div className="row">

{

Notedata.map(note =>{

return(<>

<div className="col-sm-4 py-4 ">

<div className="content bg-light shadow p-3" key={note.id}>

    <img src={imgbook} alt="pdd" width="35%"/>
    <hr/>
<h4 className="h py-2">{note.title}</h4>

<a className="btn btn-info text-white" href={note.pdf} download>Download</a>
</div>
</div>


</>)


})
}



</div>

        </LectureNoteWrap>
    );
};



const LectureNoteWrap = styled.div`

.h{
    font-size:24px;
}
a{

    cursor: pointer;
}


`
export default LectureSec;