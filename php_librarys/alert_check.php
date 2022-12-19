<?php
if (!isset($_SESSION)) {
  session_start();
}
if (isset($_SESSION['correct'])) {
  echo '<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
      ' . $_SESSION['correct'] . '
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>';
  //Clear the message
  unset($_SESSION['correct']);
}

if (isset($_SESSION['incorrect'])) {
  echo '<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
              ' . $_SESSION['incorrect'] . '
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>';
  //Clear the message
  unset($_SESSION['incorrect']);
}

if (isset($_SESSION['incorrectRegister'])) {
  echo '<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
            ' . $_SESSION['incorrectRegister'] . '
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>';
}

if (isset($_SESSION['incorrectLogin'])) {
  echo '<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
            ' . $_SESSION['incorrectLogin'] . '
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>';
}
