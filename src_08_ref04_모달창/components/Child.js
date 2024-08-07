import {useRef, forwardRef, useImperativeHandle} from 'react';


const Child=forwardRef(
    (props, ref)=>{
        const dialog_x = useRef(null);
    
        useImperativeHandle(ref, ()=>({modal_open}));

        function modal_open(){
            dialog_x.current.showModal();
        }
    return(
        <div className="Child">
            {/* ref를 써서 참조할 수 있도록 설정 */}
            <h2>Child 컴포넌트</h2>
            <dialog ref={dialog_x}>
                <form method="dialog">
                    ID : <input />
                    PW : <input />
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )}
    );

export default Child;