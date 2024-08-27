
"use clients"
import { useEffect } from 'react'
import React, { useState, useRef } from 'react'
import { Button, Container, Grid, TextField } from '@mui/material'

export default function Otp() {

    const [otp, setOtp] = useState('')
    const [message, setMessage] = useState("");


    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];



    // Reset all inputs and clear state
    const resetCode = () => {
        inputRefs.forEach(ref => {
            ref.current.value = '';
        });
        inputRefs[0].current.focus();
        setOtp('');
    }

    // Call our callback when code = 4 chars
    useEffect(() => {
        if (code.length === 4) {
            if (typeof callback === 'function') callback(code);
            resetCode();
        }
    }, [otp]); //eslint-disable-line


    function handleInput(e, index) {
        const input = e.target;
        const previousInput = inputRefs[index - 1];
        const nextInput = inputRefs[index + 1];

        // Update code state with single digit
        const newCode = [...otp];
        // Convert lowercase letters to uppercase
        if (/^[a-z]+$/.test(input.value)) {
            const uc = input.value.toUpperCase();
            newCode[index] = uc;
            inputRefs[index].current.value = uc;
        } else {
            newCode[index] = input.value;
        }
        setOtp(newCode.join(''));

        input.select();
        if (input.value === '') {
            // If the value is deleted, select previous input, if exists
            if (previousInput) {
                previousInput.current.focus();
            }
        } else if (nextInput) {
            // Select next input on entry, if exists
            nextInput.current.select();
        }
    }

    // Select the contents on focus
    function handleFocus(e) {
        e.target.select();
    }

    // Handle backspace key
    function handleKeyDown(e, index) {
        const input = e.target;
        const previousInput = inputRefs[index - 1];
        const nextInput = inputRefs[index + 1];

        if ((e.keyCode === 8 || e.keyCode === 46) && input.value === '') {
            e.preventDefault();
            setOtp((prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1));
            if (previousInput) {
                previousInput.current.focus();
                console.log(otp)
            }
        }
    }


    // Capture pasted characters
    const handlePaste = (e) => {
        const pastedCode = e.clipboardData.getData('text');
        if (pastedCode.length === 4) {
            setOtp(pastedCode);
            inputRefs.forEach((inputRef, index) => {
                inputRef.current.value = pastedCode.charAt(index);
            });
        }
    };


    // Clear button deletes all inputs and selects the first input for entry

    async function GetOtoCode() {
        const res = await fetch("/api/otpCode", {
            body: JSON.stringify({ otp: otp.join("") }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        const result = await res.json();
        if (result.success) {
            setPageLevel({ ...pageLevel, level: 2 });
        } else {
            setMessage(result.message);
        }


    }




    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item>

                        {otp.map((data, index) => {
                            return (<TextField
                                key={index}
                                maxLength={1}
                                onChange={(e) => handleInput(e, index)}
                                ref={inputRefs[index]}
                                autoFocus={index === 0}
                                onFocus={handleFocus}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste}


                            />)
                        })
                        }
                    </Grid>
                    <Grid item>
                        <Button sx={{ color: 'black' }}> ارسال</Button>
                    </Grid>
                </Grid>

            </Container>


            <Container>

                <Grid container align="center" spacing={3} sx={{ paddingTop: "4rem" }}>
                    <Box sx={{ flexDirection: "colunm", display: "flex" }}>
                        <Grid item style={{ display: "flex", padding: "2rem", justifyContent: 'center', alignContent: 'center' }}>
                            <label style={{ color: "black" }}> <Typography>
                                لطفا کد یکبار مصرف خود را وارد کنید
                            </Typography></label>
                        </Grid>
                        <Grid item sx={{ display: "flex", flexDirection: "" }}>
                            {otp.map((data, index) => {
                                return (
                                    <input
                                        style={{ width: "2.5rem", borderRadius: "5px", textAlign: 'center', outline: 'none', border: "1px solid black", display: "flex", background: "rgb(249 250 251)", marginRight: "5px", direction: "ltr" }}
                                        // className="w-10 h-10 rounded-md text-center outline-0"
                                        type="tel"
                                        name="otp"
                                        maxLength={1}
                                        key={index}
                                        value={data}
                                        onChange={(e) => handeleOtpChange(e.target, index)}
                                        onFocus={(e) => e.target.select()}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                    />
                                );
                            })}

                        </Grid>

                        <Grid item><Typography>{otp.join("")} :کد وارد شده</Typography></Grid>
                        <Grid item sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                            <Button
                                sx={{ color: 'black' }}
                                // className="text-white rounded-lg w-15 bg-blue-700  p-2"
                                onClick={(e) => setOtp([...otp.map((v) => "")])}
                            >
                                پاک کردن
                            </Button>
                            <Button
                                sx={{ color: 'black', paddingTop: "1.5rem" }}
                                // className="text-white rounded-lg bg-blue-700  p-2"
                                onClick={(e) => GetOtpNumber()}
                            >
                                ارسال
                            </Button>
                        </Grid>
                    </Box>
                </Grid >

            </Container>
        </div>
    )
}
