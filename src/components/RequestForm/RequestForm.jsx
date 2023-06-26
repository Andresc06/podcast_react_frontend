import { Anchor, Box, Button, Center, Flex, TextInput, Textarea, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import './RequestForm.css'
import { useState } from "react";
import { registerUser } from "../../services/services";
import { useNavigate } from "react-router-dom";

export function RequestForm() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [form, setForm] = useState({ name: '', email: '', phone: '', description: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleInputChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        registerUser(form).then(res => {
            if (res.status === 200) {
                setForm({ name: '', email: '', phone: '', description: '' })
                navigate('/gracias')
            }
            setLoading(false);
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div style={{
            background: '#131B1C', height: '100vh', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: "center", width: '100vw', rowGap: '20px'
        }}>
            <Title className="title">
                <Anchor href="/" color="white" style={{ textDecoration: 'none' }}>Pod Planet</Anchor>
            </Title>
            <Center style={{ width: '100%' }}>
                <Box bg="white" sx={() => ({
                    border: '2px solid black',
                    borderRadius: '10px',
                    width: isMobile ? '100%' : '500px'
                })} mx={isMobile && 20} p={50} >
                    <Title order={2} mb={30} >Solicitar servicio</Title>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <Flex direction="column" rowGap={20}>
                            <TextInput
                                placeholder="Tu nombre"
                                label="Nombre completo"
                                withAsterisk
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <TextInput
                                placeholder="Tu correo electrónico"
                                label="Correo electrónico"
                                withAsterisk
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <TextInput
                                placeholder="ej. +584241234567"
                                label="Número de teléfono"
                                withAsterisk
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <Textarea
                                placeholder="Cuentanos sobre tu proyecto, presupuesto, etc."
                                label="Descripción del podcast (opcional)"
                                name="description"
                                value={form.description}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <Button loading={loading} color="dark" type="submit">Solicitar</Button>
                        </Flex>
                    </form>
                </Box>
            </Center>
        </div>
    )
}