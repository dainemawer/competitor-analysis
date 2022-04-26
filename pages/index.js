import { useState } from 'react'
import Head from 'next/head'

import { fields } from '@data/fields';
import { useForm } from "react-hook-form";

import Description from '@components/Description/Description'
import Errors from '@components/Errors/Errors'
import Header from '@components/Header/Header'
import Intro from '@components/Intro/Intro'
import Modal from '@components/Modal/Modal'
import Status from '@components/Status/Status'
import Input from '@components/Input/Input'

import { triggerWPTAudit } from '@lib/webpagetest'

import { SubmitButton, SettingsButton, GithubButton } from '@components/Buttons'

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: 'all' });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [open, setOpen] = useState(false);
    
    const onSubmit = async data => await triggerWPTAudit(data, setLoading, setStatus);

    return (
        <>
            <Head>
                <title>Competitor Analysis Tool</title>
                <meta name="description" content="10up Competitor Analysis Tool" />
            </Head>
            <main className="grid gap-4 grid-cols-12 h-screen">
                <Header />
                <section className="flex items-center justify-center col-span-9 relative">
                    <GithubButton />
                    <SettingsButton handleClick={() => setOpen(true)} />
                    
                    <form className="max-w-3xl w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Intro />
                        <Description />
                        
                        {fields && fields.map((field, index) => {
                            const { id, placeholder, label, type, required } = field;
                            return (
                                <>
                                    <Input
                                        label={label}
                                        key={`input-${id}`}
                                        id={id}
                                        index={index}
                                        placeholder={placeholder}
                                        type={type}
                                        required={required}
                                        register={register}
                                    />
                                    <Errors id={id} errors={errors} required={required} />
                                </>
                            )
                        })}
                        <SubmitButton loading={loading} />
                        <Status status={status} />
                    </form>
                </section>
            </main>
            <Modal open={open} closeModal={() => setOpen(false)}>Hello</Modal>
        </>
    )
}

export default Home