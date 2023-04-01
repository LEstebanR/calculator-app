import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Container from '@/components/Container'
import Calculator from '@/components/Calculator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Calculator/>
    </Container>

  )
}
