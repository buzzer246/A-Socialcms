import react, { useState } from 'react';
import { bootstrap } from 'bootstrap';

const Socialscms = () => {

    const [scms, updatescms] = useState([]);
    const [newdetails, updatedetails] = useState([]);
    const [mobile, mobileno] = useState([]);
    const [mobileupdate, mobiledetails] = useState([]);
    const [pass, passdetails] = useState([]);
    const [passvaliddetails, updatepass] = useState([]);
    const [repass, password] = useState([]);
    const [repassdetails, updaterepass] = useState([]);
    const [comment, updatecomment] = useState([]);
    const [commentdetails, commentinfo] = useState([]);
    const [url, updateurl] = useState([]);
    const [urldetails, updateurlinfo] = useState([]);
    const [image, updateimage] = useState([]);
    const [imageurlinfo, imageurldetails] = useState([]);
    const [age, updateage] = useState([]);
    const [agedetails, ageinfo] = useState([]);
    const [address, updateaddress] = useState([]);
    const [addressdetails, addressinfo] = useState([]);
  

    const save = () => {

        //alert('hello');

        updatescms(scms => [...scms, newdetails]);
        mobileno(mobile => [...mobile, mobileupdate]);
        passdetails(pass => [...pass, passvaliddetails]);
        password(repass => [...repass, repassdetails]);
        updatecomment(comment => [...comment, commentdetails]);
        updateurl(url => [...url, urldetails]);
        updateimage(image => [...image, imageurlinfo]);
        updateage(age => [...age, agedetails]);
        updateaddress(address => [...address, addressdetails]);

    }

    const reset = () => {

        updatescms();
        updatedetails();
        mobiledetails();
        updatepass();
        updaterepass();
        commentinfo();
        updateurlinfo();
        imageurldetails();
        ageinfo();
        addressinfo();

    }

    return (

        <div className="container-fluid justify-content-center mt-5 border border-3 rounded-top w-50 p-3 shadow p-3 mb-5 bg-body rounded">

            <h4 class="text-success"><strong>Welcome to Social SCMS, please Register Here..!</strong></h4>
            <strong> <hr class="text-success" size="8"></hr></strong>

            <div className="row mb-4">
                <label className="form-control-md text-info mb-3 text-center"><strong>Enter the Username/ Email-id</strong></label>
                <input type="text" className="form-control-lg text-success" maxLength="30" onChange={obj => updatedetails(obj.target.value)} value={newdetails} placeholder="Enter the Username/Email" required />

            </div>
            <div className="row mb-4">
                <label className="form-control-md text-info mb-3 text-center"><strong>Mobile Number</strong></label>
                <input type="number" className="form-control-lg text-success" maxLength="20" onChange={obj => mobiledetails(obj.target.value)} value={mobileupdate} placeholder="Enter the MobileNo" required />
            </div>
            <div className="row mb-4">
                <label className="form-control-md text-info mb-3 text-center"><strong>Enter the Your Password </strong></label>
                <input type="password" className="form-control-lg text-success" maxLength="35" onChange={obj => updatepass(obj.target.value)} value={passvaliddetails} placeholder="Enter the password" required />

            </div>
            <div className="row mb-4">
                <label className="form-control-md text-info mb-3 text-center"><strong>Retype the Password </strong></label>
                <input type="password" className="form-control-lg text-success" maxLength="30" onChange={obj => updaterepass(obj.target.value)} value={repassdetails} placeholder="Confirm the Password" required />

            </div>
            <div className="row mb-4">
                <label className="form-control-md text-info mb-3 text-center"><strong>Enter the Comments </strong></label>
                <textarea maxLength="200" height={"300"} onChange={obj => commentinfo(obj.target.value)} value={commentdetails}>

                </textarea>
            </div>

            <div className="row mb-4">
            <label className="form-control-md text-info mb-3 text-center"><strong>Enter the Media Url </strong></label>
            <input type="url" className="form-control text-success"onChange={obj => updateurlinfo(obj.target.value)} value={urldetails} placeholder="Enter the Custome URl" />
            </div>
            <div className="row mb-4">
                <label className="form-control-md text-info mb-3 text-center"><strong>Upload Image</strong></label>
                <input type="file" className="form-control text-success" onChange={obj => imageurlinfo(obj.target.value)} value={imageurldetails} />
            </div>
            <div className="row mb-4">
                <label className="form-control-lg text-info mb-3 text-center"><strong>Client Age </strong></label>
                <input type="text" className="form-control-lg text-success" maxLength="4" onChange={obj => ageinfo(obj.target.value)} value={agedetails} placeholder="Enter the Your Age" required />

            </div>
            <div className="row mb-4">
                <label className="form-control-md text-info mb-3 text-center"><strong>Enter the Permanent Address</strong></label>
                <input type="text" className="form-control-lg text-success" maxLength="30" onChange={obj => addressinfo(obj.target.value)} value={addressdetails} placeholder="Enter the Address" required />

            </div>


            <button onClick={save} type="submit" className="btn btn-primary mb-3">Submit</button>
            <button onClick={reset} type="submit" className="btn btn-danger ms-3 mb-3">Cancel</button>


            <div class="row">

                {scms.map((name, index) => {

                    return (
                        <p>{name}</p>

                    )
                })
             }
                
				 {mobile.map((minfo, index) => {

                    return (
                        <p>{minfo}</p>

                    )
                })
             }
                {pass.map((passinfo, index) => {

                        return (
                            <p>{passinfo}</p>

                 )
               })
          }
       
            {repass.map((repassinfo, index) => {

                return (
                    <p>{repassinfo}</p>

                )
                })
             }


                {url.map((urlinfo, index) => {

                return (
                    <p>{urlinfo}</p>

                )
                })
                }


                    {image.map((imageinfo, index) => {

                    return (
                        <p>{imageinfo}</p>

                    )
                    })
                    }


                
                    {comment.map((commentinfo, index) => {

                    return (
                        <p>{commentinfo}</p>

                    )
                    })
                    }



                    {age.map((ageinfo, index) => {

                    return (
                        <p>{ageinfo}</p>

                    )
                    })
                    }




                {address.map((addressinfo, index) => {

                return (
                    <p>{addressinfo}</p>

                )
                })
                }
                <div className="container">
                    <div className="row mb-4">
                <small> You have Enter: 
               
                    {newdetails},
                    {mobileupdate},
                    {passvaliddetails},
                    {repassdetails},
                    {commentdetails},
                    {urldetails},
                    {imageurlinfo},
                    {agedetails},
                    {addressdetails}
                </small>
            </div>
            </div>
            </div>
            </div>

    )

}

export default Socialscms;