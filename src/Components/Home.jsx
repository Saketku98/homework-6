import React from 'react'
import './Style/Home.css'

const Home = () => {
  return (
    <div className='HomeOuterDiv'>
      <div className="textDiv">
        <h1>Header</h1>
        <h1>Footer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae illo quas, in facere eaque, vel possimus dicta consectetur dolore incidunt commodi. Veritatis exercitationem quasi obcaecati atque suscipit sunt magni incidunt porro ducimus quam voluptate, hic sint libero expedita saepe quia temporibus unde officia perferendis eos fugit natus cum! Voluptas molestiae ipsa at. Aut ipsa officiis quaerat nobis ex assumenda vero.</p>
        <div className="dotDiv">
          <p style={{backgroundColor:"yellow", height:"50%" , width:"15%",marginTop:"20px"}}></p>
          &nbsp;
          <p style={{backgroundColor:"#dd5259", height:"70%" , width:"20%",marginBottom:"20px"}}></p> &nbsp;
          <p style={{backgroundColor:"#4d87c6", height:"70%" , width:"20%",marginTop:"10px"}}></p>
        </div>
      </div>
      <div className="imageDiv">
        <img src="https://media.istockphoto.com/id/1205706414/photo/happy-confident-young-indian-girl-model-female-student-professional-wear-glasses-look-at.jpg?s=1024x1024&w=is&k=20&c=85mZWREqs8pyopD95IgmR-9GVO5SGwKa_y8MmQge-BE=" alt="" />
      </div>
    </div>
  )
}

export default Home