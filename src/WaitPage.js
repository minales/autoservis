import './WaitPage.css';

function WaitPage() {
    
    return(
        <section className='slider1'>
            <div className="slide1 current1">
                <img src={require("./images/automechanic.jpg")} className='slide-image1'/>
                <div className="slide-content1">
                    <h3 className="slide-title1">Autoservis Maleš</h3>
                    <p className="slide-desc1">Svetozara Miletića 22, Bočar</p>
                    <table>
                        <tr className='slide-tableth'>
                            <th>Slavko Maleš</th>
                            <th>Milan Maleš</th>
                        </tr>
                        <tr className='slide-tabletd'>
                            <td>062 8696397</td>
                            <td>061 6263687</td>
                        </tr>
                        <tr className='slide-tabletd'>
                            <td>slavkomales02@gmail.com</td>
                            <td>milanmales22@gmail.com</td>
                        </tr>
                    </table>
                    <div className='table2'>
                        <div className='table2box'>
                            <h4 className='table2-title'>Slavko Maleš</h4>
                            <p className='table2-desc1'>062 8696397</p>
                            <p className='table2-desc2'>slavkomales02@gmail.com</p>
                        </div>
                        <div className='table2box2'>
                            <h4 className='table2-title'>Milan Maleš</h4>
                            <p className='table2-desc1'>061 6263687</p>
                            <p className='table2-desc2'>milanmales22@gmail.com</p>
                        </div>
                    </div>
                    <p className='info'>Website je trenutno u izgradnji</p>
                </div>
            </div>
        </section>
    )
}

export default WaitPage;