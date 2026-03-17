function UserBloc({ firstName }) {
    return (
        <section>
            <h1>
                Bonjour <span>{firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
}

export default UserBloc