import styles from "./ProjectForm.module.css"
import Teste from "../form/Teste"
import LInput from "../form/LInput"
import Selected from "../form/Selected"
import SubmitButton from "../form/SubmitButton"
function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>

            <Teste />
            <LInput
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto."
            />
            <LInput
                type="number"
                text="Orçamento do projeto"
                name="name"
                placeholder="Insira o orçamento total."
            />

            <Selected name="category_id" text="Selecione a categoria" />
            <SubmitButton text={btnText} />

        </form>
    )
}

export default ProjectForm