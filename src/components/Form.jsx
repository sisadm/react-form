import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"

function Form() {

    const { register,
            handleSubmit,
            formState: { errors }} = useForm();

    const onSubmit = (data) => { console.log(data)}

    const errorMessage = (err, name) => {
        return (
            <ErrorMessage
            errors={err}
            name={name}
            render={({ message }) => <p> {message} </p> }
            />
        );
    }

    return (
        <div>
            <h1>Contact Us!</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>
                        First Name:
                        <input type="text" name='f_name' {...register('f_name', {required: "Please fill this part!", pattern: /^[A-Za-z]+$/i})} />
                    </label>
                    {/*error message function*/}
                    {errorMessage(errors, 'f_name')}
                </div>

                <div>
                    <label>
                        Last Name:
                        <input type="text" name="l_name" {...register('l_name', {required: "Please fill this part!", pattern: /^[A-Za-z]+$/i})} />
                    </label>
                    {errorMessage(errors, 'l_name')}
                </div>

                <div>
                    <label>
                        Email:
                        {/*<input type="email" name="email" {...register('email')} />*/}
                        <input type="text" name="email" {...register('email', {required: "Please fill this part!", pattern: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i })} />
                    </label>
                    {errorMessage(errors, 'email')}
                </div>

                <div>
                    <label>
                        Message:
                        <textarea name="message" {...register('message', {maxLength: 100})} />
                    </label>
                </div>

                <div>
                    <label>
                        How Did you hear of us:
                    </label>
                    <select name="source" {...register("source")}>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Word of mouth">Word of mouth</option>
                        <option value="Other">Other</option>
                    </select>
                </div>



                <input type="submit"/>
            </form>

        </div>
    )
}


export default Form
