package eu.lestard.bloggie.server.boot.repositories;

import org.springframework.data.repository.CrudRepository;

import eu.lestard.bloggie.server.boot.data.Article;

import java.util.Optional;

public interface ArticleRepository extends CrudRepository<Article, String> {

    Optional<Article> findByPermalink(String permalink);

    Optional<Article> findByIdAndPermalink(String id, String permalink);

}
