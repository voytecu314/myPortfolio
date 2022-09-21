import { useRef, useEffect } from "react";

const Triangle = ({Icon, text}) => {

  const triangleRef = useRef();

  useEffect(() => {
//console.log(triangleRef.current.children[0].children[1].innerHTML);
    const options = {
        root: null,
        margin: '1000px',
        threshold: '1'
    }

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {console.log(entry.isIntersecting);
            entry.isIntersecting ? entry.target.classList.add('show') : entry.target.classList.remove('show');            
        });
    });

    observer.observe(triangleRef.current);

  },[]);
 

  return (
    <div className='triangles' ref={triangleRef}>
        <div>
            <Icon size={'5rem'}/>
            <h2>{text}</h2>
        </div>
    </div>
  )
}

export default Triangle;
