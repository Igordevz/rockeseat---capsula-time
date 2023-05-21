import RemembranceApp from '@/components/remembranceApp'


export default async function Home() {
  await  new Promise((resolve) => setTimeout(resolve, 3000))

  return (
        <RemembranceApp/>
    )
}
