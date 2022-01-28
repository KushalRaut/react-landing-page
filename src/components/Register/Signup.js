import React, { useEffect, useState, useRef } from 'react'
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  ImageWrapper,
  PreviewImage,
  UploadButton,
  UploadText,
  InputWrapper,
  InputCol1,
  InputCol2,
  FormInput,
  Form,
  Text,
} from './SignupElements'
import { BiImageAdd } from 'react-icons/bi'

const Signup = () => {
  const [image, setImage] = useState()
  const [preview, setPreview] = useState()

  const fileInputRef = useRef()

  useEffect(async () => {
    if (image) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(image)
      setPreview(reader.result)
    } else {
      setPreview(null)
    }
  }, [image])

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Register</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign up to create account</FormH1>
              <ImageWrapper>
                <FormLabel htmlFor="party-name">Photo:</FormLabel>
                {preview ? (
                  <PreviewImage src={preview} />
                ) : (
                  <UploadButton
                    className="img-btn"
                    onClick={(e) => {
                      e.preventDefault()
                      fileInputRef.current.click()
                    }}
                  >
                    <UploadText>
                      <BiImageAdd />
                    </UploadText>
                  </UploadButton>
                )}
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    if (file && file.type.substr(0, 5) === 'image') {
                      setImage(file)
                    } else {
                      setImage(null)
                    }
                  }}
                  required
                />
              </ImageWrapper>
              <InputWrapper>
                <InputCol1>
                  <FormLabel htmlFor="for">Full Name:</FormLabel>
                  <FormInput type="text" required />
                  <FormLabel htmlFor="for">E-mail:</FormLabel>
                  <FormInput type="email" required />
                  <FormLabel htmlFor="for">Password:</FormLabel>
                  <FormInput type="password" required />
                </InputCol1>
                <InputCol2>
                  <FormLabel htmlFor="for">Citizenship No:</FormLabel>
                  <FormInput type="text" required />
                  <FormLabel htmlFor="for">Phone No:</FormLabel>
                  <FormInput type="text" required />
                  <FormLabel htmlFor="for">Location:</FormLabel>
                  <FormInput type="text" required />
                </InputCol2>
              </InputWrapper>
              <FormButton>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signup
