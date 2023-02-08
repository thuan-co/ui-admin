// @flow
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { CameraDto } from '../../models';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cameraActions } from '../redux-saga/camera/cameraSlice';
import { RootState } from '../../app/store';

type Props = {
    name: string,
    data: CameraDto,
    updateData: (name:string, value:string, data: CameraDto,func:(arg: CameraDto)=>void) =>void,
    setData: (arg:CameraDto) => void
}

export function Camera(props: Props) {
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        props.updateData(name, value, props.data, props.setData)
        // console.log("Camera: ", props.data)
    }
    
    return (
        <div className="type-camera-container">
            <h5>{props.name}</h5>
            <div className="input-content-camera">
                <TextField id={'camera-solution-' + props.name} label='Độ phân giải' 
                    type='number'
                    variant='outlined'
                    name='solution'
                    value={props.data.solution}
                    // onChange={(e) => {
                    //     const {value, name} = e.target
                    //     props.updateData(name, value, props.data, props.setData)
                    //     console.log("Camera: ", props.data)
                    // }}
                    onChange={handleOnChange}
                    inputProps={{
                        min: 10,
                        max: 10000,
                        // pattern: "[0-9]*"
                    }}   
                />
                <TextField id={'camera-features' + props.name} label='Các tính năng'
                    variant='outlined'
                    name='features'
                    value={props.data.features}
                    onChange={handleOnChange}
                />
            </div>
        </div>
    )
}

export default function MakeCamera() {

    const dispatch = useAppDispatch()

    const selector = useAppSelector((state:RootState)=> state.phone)

    const initialState1:CameraDto = {
        id: null,
        solution: '',
        features: '',
        position: 'front',
        phoneId: selector.id
    }
    const initialState2:CameraDto = {
        id: null,
        solution: '',
        features: '',
        position: 'rear',
        phoneId: selector.id
    }

    const [fcamera, setFCamera] = React.useState<CameraDto>(initialState1)

    const [rcamera, setRCamera] = React.useState<CameraDto>(initialState2)

    const updateCameraData = (name:string, value:string, data: CameraDto,func:(arg: CameraDto)=>void) => {

        func({...data, [name]:value})
    }

    const handleClickMakeCam = () => {

        // TODO: dispatch action create new cams of phone
        let listCams = [fcamera, rcamera]
        // console.log("data: ", listCams)
        dispatch(cameraActions.makeNewCamera(listCams))
    }

    React.useEffect(()=>{
        setRCamera({...rcamera, phoneId: selector.id})
    },[selector.id])

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
                        setFCamera(initialState1)
                        setRCamera(initialState2)
                    }}
                >
                    Xóa
                </Button>

                <Button color='success' variant='contained'
                    onClick={handleClickMakeCam}
                >Tạo</Button>
            </div>
            
            {/* <div className="result-make-camera">
                    result make camera
            </div>         */}
        </div>  
    );
};