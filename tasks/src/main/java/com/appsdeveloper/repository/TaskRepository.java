package com.appsdeveloper.repository;

import com.appsdeveloper.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {


}
