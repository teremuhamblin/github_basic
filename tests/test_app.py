from src.app import main

def test_main_output(capsys):
    main()
    captured = capsys.readouterr()
    assert "github_basic" in captured.out
