import React from 'react'
  
const Progress = ({progress}) => {
     
    const Parentdiv = {
        height: '30px',
        width: '90%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        marginLeft: 5,
        marginTop: '50px',
        marginBottom: '50px',
        border:'black'
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'teal',
        borderRadius:40,
        textAlign: 'right',
        alignItems: 'center'
      }
      
      const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 900
      }
        
    return (
      <div className='px-3 shadow-md py-14'>
      <div className='font-bold'>
        <h2 className='font-bold text-green-700'>Completion Rate: </h2>
        {progress}%
      </div>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${progress}%`}</span>
        </div>
      </div></div>
    )
}
  
export default Progress;
