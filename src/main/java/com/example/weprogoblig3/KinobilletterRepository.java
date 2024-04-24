package com.example.weprogoblig3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Collections;
import java.util.Comparator;


@Repository
public class KinobilletterRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreKinobilletter(Kinobilletter innKinobilletter) {
        String sql = "INSERT INTO Kinobilletter (valgtfilm, antall, fnavn, enavn, tel, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innKinobilletter.getValgtfilm(), innKinobilletter.getAntall(), innKinobilletter.getFnavn(), innKinobilletter.getEnavn(), innKinobilletter.getTel(), innKinobilletter.getEpost());
    }

    public List<Kinobilletter> hentAlleKinobilletter() {
        String sql = "Select * FROM Kinobilletter";
        List<Kinobilletter> alleKinobilletter = db.query(sql, new BeanPropertyRowMapper(Kinobilletter.class));
        return alleKinobilletter;
    }
    public List<Kinobilletter> hentAlleKinobilletterSortertEtterEtternavn() {
        String sql = "SELECT * FROM Kinobilletter";
        List<Kinobilletter> alleKinobilletter = db.query(sql, new BeanPropertyRowMapper<>(Kinobilletter.class));

        // Sorter listen etter etternavn
        Collections.sort(alleKinobilletter, Comparator.comparing(Kinobilletter::getEnavn));

        return alleKinobilletter;
    }

    public void slettAlleKinobilletter() {
        String sql = "Delete FROM Kinobilletter";
        db.update(sql);
    }

}
