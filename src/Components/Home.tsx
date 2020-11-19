import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

  

type Props = { }

type State = { 
    code: string,
}

let initialCode = `Program program;

main () {

}
`

export class Home extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props)
        this.state = {
            code : initialCode
        }
    }


    handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        this.setState({
            code: event.target.value
        })
    }



    render() {
        return (
            <>
                <Grid container direction='row' justify='center'>
                    <Typography  style={{ paddingTop: '20px', paddingBottom: '30px' }} variant='h3'>
                        Compilords
                    </Typography>
                </Grid>
                <Grid container direction='row' justify='space-around'>
                    <Grid container direction='column' alignItems='center' style={{ width: '50%' }} item>
                        <form style={{ width: '100%' }} noValidate autoComplete='off'>
                            <TextField
                                value={ this.state.code }
                                onChange={ this.handleCodeChange }
                                style={{ width: '100%' }} 
                                id='standard-basic' 
                                label='Codigo'
                                multiline
                                rows={ 35 }
                                variant='outlined'
                            />
                        </form>
                        <Grid style={{ paddingTop: '30px' }} item>
                            <Button variant='contained' color='primary'>
                                Run 
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid style={{ height: '100%' }} container direction='column' justify='space-around' alignItems="center">
                            <Button variant='contained' color='primary'>
                                Insert If 
                            </Button>
                            <Button variant='contained' color='secondary'>
                                Insert While 
                            </Button>
                            <Button variant='contained' color='primary'>
                                Insert For 
                            </Button>
                            <Button variant='contained' color='secondary'>
                                Insert 
                            </Button>
                            <Button variant='contained' color='primary'>
                                Primary 
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }


}