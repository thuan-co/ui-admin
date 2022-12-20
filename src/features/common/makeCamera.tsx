// @flow
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { CameraDto } from '../../models';

type Props = {
    name: string,
    data: CameraDto,
    updateData: (name:string, value:string, data: CameraDto,func:(arg: CameraDto)=>void) =>void,
    setData: (arg:CameraDto) => void
}

export function Camera(props: Props) {

    return (
        <div className="type-camera-container">
            <h5>{props.name}</h5>
            <div className="input-content-camera">
                <TextField id='camera-solution' label='Độ phân giải' 
                    type='number'
                    variant='outlined'
                    name='solution'
                    value={props.data.solution}
                    onChange={(e) => {
                        const {value, name} = e.target
                        props.updateData(name, value, props.data, props.setData)
                        // console.log("Camera: ", props.data)
                    }}
                    inputProps={{
                        min: 10,
                        max: 10000,
                        // pattern: "[0-9]*"
                    }}   
                />
                <TextField id='camera-features' label='Các tính năng'
                    variant='outlined'
                />
            </div>
        </div>
    )
}

export default function MakeCamera() {

    const initialState:CameraDto = {
        id: null,
        solution: '',
        features: '',
    }
    const [fcamera, setFCamera] = React.useState<CameraDto>(initialState)

    const [rcamera, setRCamera] = React.useState<CameraDto>(initialState)

    const updateCameraData = (name:string, value:string, data: CameraDto,func:(arg: CameraDto)=>void) => {

        func({...data, [name]:value})
    }

    const handleClickMakeCam = () => {

        // TODO: dispatch action create new cams of phone
        console.log("Front camera data: ", fcamera)
        console.log("Rear camera data: ", rcamera)
    }
    return (
        <div className='camera-container'>
            {/* <h5>Camera</h5> */}
            <div className='make-camera-container'>
                <Camera name='Camera trước' data={fcamera} updateData={updateCameraData} setData={setFCamera}/>

                <Camera name='Camera sau' data={rcamera} updateData={updateCameraData} setData={setRCamera}/>
            </div>

            <div className="action-cam-btn">
                <Button color='error' variant='outlined' 
                    onClick={() => {
                        setFCamera(initialState)
                        setRCamera(initialState)
                    }}
                >
                    Xóa
                </Button>

                <Button color='success' variant='contained'
                    onClick={handleClickMakeCam}
                >Tạo</Button>
            </div>
            <div className="result-make-camera">
                    result make camera
            </div>        
        </div>  
    );
};