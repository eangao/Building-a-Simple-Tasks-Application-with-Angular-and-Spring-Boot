package com.appsdeveloper.service;

import com.appsdeveloper.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
