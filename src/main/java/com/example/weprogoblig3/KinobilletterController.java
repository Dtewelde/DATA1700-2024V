package com.example.weprogoblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class KinobilletterController {
    @Autowired
    private KinobilletterRepository rep;
    //private List<com.example.weprogoblig3.Kinobilletter> AlleKinobilletter = new ArrayList<>();
    @PostMapping("/lagre")
    public void lagreKinobilletter(Kinobilletter innKinobilletter){
        rep.lagreKinobilletter(innKinobilletter);
        //System.out.println(innKinobilletter.getValgtfilm());
        //System.out.println(innKinobilletter.getAntall());
        //System.out.println(innKinobilletter.getFnavn());
        //System.out.println(innKinobilletter.getEnavn());
        //System.out.println(innKinobilletter.getTel());
        //System.out.println(innKinobilletter.getEpost());

        //AlleKinobilletter.add(innKinobilletter);
        //System.out.println(AlleKinobilletter.get(0).getAntall());
        //rep.save(innKinobilletter);
    }
    @GetMapping("/hentAlle")
    public List<Kinobilletter> hentalle() {
        return rep.hentAlleKinobilletter();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleKinobilletter();
    }

 /*   @PostMapping("/lagre")
    public String lagreMann(){
        return "vi har lagret mann på server";
    }
*/
};
