


function ResponseError({message}){
    console.log(message);
    return(
      <>
        <h2>에러 페이지</h2>
         {message.message}
      </>
    );
}

export default ResponseError;