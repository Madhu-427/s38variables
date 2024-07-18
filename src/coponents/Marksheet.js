import React from 'react'

function Marksheet(props) {
    let sanskritmarks=Number(props.sanskritmarks);
    let englishmarks=Number(props.englishmarks);
    let maths1Amarks=Number(props.maths1Amarks);
    let maths1Bmarks=Number(props.maths1Bmarks);
    let physicsmarks=Number(props.physicsmarks);
    let chemistrymarks=Number(props.chemistrymarks);
    let totalmarks= sanskritmarks+englishmarks+maths1Amarks+maths1Bmarks+physicsmarks+chemistrymarks;
    let perc=(totalmarks/470)*100
    

  return (
    <div>
        
        <table>
            <caption>{props.studentname} marksheet</caption>
            <thead>
                <tr>
                    <th>subject</th>
                    <th>max.marks</th>
                    <th>marks obtained</th>
                    <th>result</th>
                    <th>remarks</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>sanskrit</td>
                    <td>100</td>
                    <td>{sanskritmarks}</td>
                    <td>{sanskritmarks>=35?"pass":"Fail"}</td>
                    <td>excellent</td>
                </tr>
                <tr>
                    <td>english</td>
                    <td>100</td>
                    <td>{englishmarks}</td>
                    <td>{englishmarks>=35?"pass":"Fail"}</td>
                    <td>excellent</td>
                </tr>
                <tr>
                    <td>maths1A</td>
                    <td>75</td>
                    <td>{maths1Amarks}</td>
                    <td>{maths1Amarks>=27?"pass":"Fail"}</td>
                    <td>excellent</td>
                </tr>
                <tr>
                    <td>maths1B</td>
                    <td>75</td>
                    <td>{maths1Bmarks}</td>
                    <td>{maths1Bmarks>=27?"pass":"Fail"}</td>
                    <td>excellent</td>
                </tr>
                <tr>
                    <td>physics</td>
                    <td>60</td>
                    <td>{physicsmarks}</td>
                    <td>{physicsmarks>=21?"pass":"Fail"}</td>
                    <td>excellent</td>
                </tr>
                <tr>
                    <td>chemistry</td>
                    <td>60</td>
                    <td>{chemistrymarks}</td>
                    <td>{chemistrymarks>=21?"pass":"Fail"}</td>
                    <td>excellent</td>
                </tr>
                </tbody>
            <tfoot>
                <tr>
                <td>total</td>
                    <td>470</td>
                    <td>
                        {totalmarks} ({perc.toFixed(2)}%)
                        </td>
                    <td>pass</td>
                    <td>excellent</td>

                </tr>
            </tfoot>

        </table>
    </div>
  )
}

export default Marksheet