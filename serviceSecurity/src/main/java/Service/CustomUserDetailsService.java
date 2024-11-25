package security;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service // Indique que cette classe est un service Spring.
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Remplacez ceci par votre logique pour charger l'utilisateur depuis votre base de données.
        if ("user".equals(username)) {
            return User.builder()
                    .username("user")
                    .password("$2a$10$7Q/Er9oMOg59BG2iN2lQ5e4ZUnh/eSgRLjYPWQxD9jpo8RE31zE.i") // Mot de passe encodé (exemple).
                    .authorities(Collections.emptyList())
                    .build();
        } else {
            throw new UsernameNotFoundException("Utilisateur non trouvé : " + username);
        }
    }
}
